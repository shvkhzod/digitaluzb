
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
    const { courseName, topicName } = params;
    
    try {
        const response = await fetch(`/darslar/${courseName}/${topicName}.md`);
        if (!response.ok) {
            throw error(404, 'Topic not found');
        }
        const markdown = await response.text();

        return {
            courseName,
            topicName,
            markdown,
        };
    } catch (err) {
        console.error('Error fetching topic content:', err);
        throw error(500, 'Error fetching topic content');
    }
}