export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen">
			<div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">Left</div>
			<div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[96%]">
				Right
			</div>
		</div>
	);
}
