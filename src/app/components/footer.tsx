import Link from "next/link"

export default function FooterComponent() {
    return (
        <footer className="bg-muted p-6 md:py-12 w-full">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
                <div className="grid gap-1">
                    <h3 className="font-semibold">About</h3>
                    <Link href="#" prefetch={false}>
                        About Us
                    </Link>
                    <Link href="#" prefetch={false}>
                        Our Team
                    </Link>
                    <Link href="#" prefetch={false}>
                        Careers
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Services</h3>
                    <Link href="#" prefetch={false}>
                        Web Development
                    </Link>
                    <Link href="#" prefetch={false}>
                        Mobile Apps
                    </Link>
                    <Link href="#" prefetch={false}>
                        Consulting
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Contact</h3>
                    <Link href="#" prefetch={false}>
                        ceo.ibitf@iitbhilai.ac.in
                    </Link>
                    <Link href="#" prefetch={false}>
                        Phone
                    </Link>
                    <Link href="#" prefetch={false}>
                        Address
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="#" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" prefetch={false}>
                        Cookie Policy
                    </Link>
                </div>
            </div>
            <div className="container max-w-7xl mt-8 text-xs text-muted-foreground">
                &copy; 2024 IBITF. All rights reserved.
            </div>
        </footer>
    )
}