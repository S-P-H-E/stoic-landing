export function getCurrentYear() {
    return new Date().getFullYear();
}
export const handleSubscription = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // priceId: 'price_1OQDteJVAR9FxLkw3SLA8UZv',
                // promoId: 'promo_1OQDw8JVAR9FxLkwrpCHI1xO',
            }),
        });

        if (!response.ok) {
            return { error: 'There was an issue with your request. Please try again later!'}
        }

        /*if (typeof window !== 'undefined') {
          window.location.assign(data); // Uncomment this line if needed
        }*/

        return await response.json();
    } catch (error: any) {
        console.error('Error during fetch:', error.message);
        throw error; // Rethrow the error to handle it further if needed
    }
};