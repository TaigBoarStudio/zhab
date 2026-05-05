import fs from 'fs';
import path from 'path';

const dir = './public/content/articles';
const outputDir = './src/data';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

function slugify(text: string) {
    const ru: { [key: string]: string } = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
    };
    
    return text
        .toString()
        .toLowerCase()
        .trim()
        .split('')
        .map(char => ru[char] || char)
        .join('')
        .replace(/\s+/g, '-')     // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-')   // Replace multiple - with single -
        .replace(/^-+/, '')       // Trim - from start of text
        .replace(/-+$/, '')      // Trim - from end of text
        .substring(0, 100);       // Limit length
}

const articles = files.map(file => {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const lines = content.split('\n');
    
    let title = '';
    let description = '';
    let tags: string[] = [];
    let bodyLines: string[] = [];
    let customCategory = '';
    let customSubcategory = '';
    
    let inHeader = true;

    lines.forEach(line => {
        if (inHeader) {
            const trimmedLine = line.trim();
            if (trimmedLine === '' && (title || description)) {
                inHeader = false;
                return;
            }

            // Check if this line looks like it contains multiple headers on one line
            // or if it's just a single header line.
            const headers = ['Title:', 'Description:', 'Keywords:', 'Category:', 'Subcategory:'];
            let foundAny = false;

            // Simple heuristic: if the line contains multiple header keys, it's a combined line
            let lastIndex = -1;
            let foundFields: { key: string, start: number }[] = [];

            headers.forEach(h => {
                const idx = trimmedLine.indexOf(h);
                if (idx !== -1) {
                    foundFields.push({ key: h, start: idx });
                    foundAny = true;
                }
            });

            if (foundAny) {
                foundFields.sort((a, b) => a.start - b.start);
                for (let i = 0; i < foundFields.length; i++) {
                    const field = foundFields[i];
                    const nextField = foundFields[i + 1];
                    const value = trimmedLine.substring(
                        field.start + field.key.length,
                        nextField ? nextField.start : trimmedLine.length
                    ).trim();

                    if (field.key === 'Title:') title = value;
                    else if (field.key === 'Description:') description = value;
                    else if (field.key === 'Keywords:') tags = value.split(',').map(t => t.trim());
                    else if (field.key === 'Category:') customCategory = value;
                    else if (field.key === 'Subcategory:') customSubcategory = value;
                }
            } else if (trimmedLine !== '') {
                // If it doesn't look like a header field and it's not empty, it's probably the start of content
                inHeader = false;
                bodyLines.push(line);
            }
        } else {
            bodyLines.push(line);
        }
    });

    const body = bodyLines.join('\n');

    if (!title) {
        const titleLine = lines.find(l => l.startsWith('###') || l.startsWith('# '));
        if (titleLine) title = titleLine.replace(/^#+\s*/, '').trim();
    }
    
    if (!title) {
        title = file.replace('.md', '').replace(/^\d+\.\s*/, '');
    }

    const wordCount = body.trim().split(/\s+/).length;
    const readTime = `${Math.ceil(wordCount / 200)} мин`;
    const date = "4 мая 2026 г."; // Use a constant or current date if needed

    let category = customCategory || 'Общее';
    let categorySlug = slugify(category);
    if (!customCategory) {
        const lowerTitle = title.toLowerCase();
        if (lowerTitle.includes('шен')) category = 'Шен Пуэр';
        else if (lowerTitle.includes('шу')) category = 'Шу Пуэр';
        else if (lowerTitle.includes('заварив') || lowerTitle.includes('как') || lowerTitle.includes('мастер-класс')) category = 'Заваривание';
        else if (lowerTitle.includes('польз') || lowerTitle.includes('вред') || lowerTitle.includes('эффект')) category = 'Здоровье';
        else if (lowerTitle.includes('история') || lowerTitle.includes('появился')) category = 'История';
    }

    // Default brewing stats for the category
    let brewingStats = undefined;
    const lowerTitle = title.toLowerCase();
    if (category === 'Заваривание' || customCategory === 'Заваривание') {
        if (lowerTitle.includes('шу')) {
            brewingStats = { temp: '95-100°C', time: '10-20 сек', amount: '7-8г / 100мл' };
        } else if (lowerTitle.includes('шен')) {
            brewingStats = { temp: '85-90°C', time: '5-15 сек', amount: '5-6г / 100мл' };
        } else {
            brewingStats = { temp: '90-95°C', time: '10-15 сек', amount: '6-7г / 100мл' };
        }
    }

    return {
        slug: slugify(title),
        title,
        subtitle: description || title,
        content: body.trim(),
        tags: [...new Set(tags)].filter(t => t.length > 0),
        date,
        readTime,
        category,
        subcategory: customSubcategory || undefined,
        categorySlug: slugify(category),
        brewingStats,
        image: `https://picsum.photos/seed/${slugify(title)}/1200/800`
    };
});

// Ensure data directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'articles.json'), JSON.stringify(articles, null, 2));
console.log(`Successfully processed ${articles.length} articles to ${path.join(outputDir, 'articles.json')}.`);
