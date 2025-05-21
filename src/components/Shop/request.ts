import axios from "axios";
import { token } from "@/credential";

function handleResponse(list) {
    return list.map(item => ({
        id: item.listingId,
        title: item.title,
        reviews: item.price,
        price: item.price,
        discountedPrice: item.price * 0.8,
        imgs: {
            thumbnails: item.images,
            previews: item.images,
        },
    }));
}

export async function callListAPI() {
    try {
        const reponse = await axios({
            method: 'get',
            url: '/api/items',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        return handleResponse(reponse.data);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}