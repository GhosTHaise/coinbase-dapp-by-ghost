import sanityClient from "@sanity/client"

export const client = sanityClient({
    projectId : "kkrsj98b",
    dataset : "production",
    apiVersion : "v1",
    token: "skH6Dg3wGWBZvFrX7u2Wn4bsp57pWVPIdRL6QFcBJjsEQyLI6nkkeJSuzHQ1Y1j4YI8aGY2aXyFFXLNNfYxu3Vd8If21NqJnUnqagf0xRDiAIior2aHZ1eIYlWZlDB4jPMt4CUlfK4trJ8ocQvfmfkKnMww09P66nMGJuPuHG90xK7HzVqzd",
    useCdn: false
})