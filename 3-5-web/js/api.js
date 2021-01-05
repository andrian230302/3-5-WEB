const BASE_URL = "http://localhost:8080";
const RESOURSE_URL = `${BASE_URL}/mouses`;

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }
        return await fetch(`${RESOURSE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

export const getAllMouses = async() => {
    const rawResponse = await baseRequest({ method: "GET" });
    return rawResponse.json();
};

export const postMouses = (body) => baseRequest({ method: "POST", body });

export const updateMouses = (id, body) =>
    baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteMouses = (id) =>
    baseRequest({ urlPath: `/${id}`, method: "DELETE" });