export async function GET(req, res, next) {
    let users = [
        {
            id: 1,
            name: "ahmad",
            email: "ahmad@gmail.com",
        },
        {
            id: 2,
            name: "tito",
            email: "tito@gmail.com",
        }
    ];

    let data = JSON.stringify(users);

    return new Response(data, { status: 200 });
}
