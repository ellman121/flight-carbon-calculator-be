declare module AiportApi {
    interface Airport {
        name: string;
        code: string;
        coords: {
            lat: number;
            lon: number;
        }
    }

    interface Offset {
        username: string;
        distance: number;
        value: number;
    }
}
