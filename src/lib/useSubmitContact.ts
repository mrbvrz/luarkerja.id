import useSWRMutation from 'swr/mutation';

async function sendContactRequest(url: string, { arg }: { arg: any }) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(arg),
        headers: { 'Content-Type': 'application/json' }
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Submission failed');
    }

    return res.json();
}

export const useSubmitContact = () => useSWRMutation('/api/contact', sendContactRequest);
