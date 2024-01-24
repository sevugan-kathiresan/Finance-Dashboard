import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This file is concerned with creating a creating a template engine which lets us write all the API calls we need to make for our app to run

export const api = createApi({
    baseQuery:fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        getKpis: build.query<void, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
    }),
});

export const { useGetKpisQuery } = api;