/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "./axios";


export async function getAbout(): Promise<any> {
    try {
        const response = await api.get('/about');
        return response;
    } catch (error) {
        console.error('Error fetching about data:', error);
        throw error;
    }
}

export async function getProjects(): Promise<any> {
    try {
        const response = await api.get('/projects');
        return response;
    } catch (error) {
        console.error('Error fetching projects data:', error);
        throw error;
    }
}


interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export async function postContact(formData: ContactFormData) {
    try {
        const formParams = new URLSearchParams();
        formParams.append("name", formData.name);
        formParams.append("email", formData.email);
        formParams.append("message", formData.message);

        const response = await api.post("/contact", formParams, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error posting contact:", error);
        return { success: false, error };
    }
}