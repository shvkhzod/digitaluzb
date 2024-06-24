import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const { courseName } = params;
    
    if (!courseName) {
        return { courseName: null, content: null };
    }

    try {
        const response = await fetch(`/darslar/${courseName}/mundarija.md`);
        if (!response.ok) {
            throw error(404, 'Not found');
        }
        const content = await response.text();
        return { courseName, content };
    } catch (err) {
        console.error(`Error fetching file:`, err);
        throw error(500, 'Error fetching content');
    }
}