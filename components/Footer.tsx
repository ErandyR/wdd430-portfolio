
async function getCurrentYear() {
    "use cache";

    return new Date().getFullYear();
}

export default async function Footer() {
    const year = await getCurrentYear();

    return (
        <footer className="bg-gray-800 py-4 text-white mt-12">
            <div className="container mx-auto text-center">
                <p>
                    Copyright © {year} | Erandy Ramirez | All rights reserved
                </p>
            </div>
        </footer>
    );
}
