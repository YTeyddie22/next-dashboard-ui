import UserCards from "@/components/UserCards";
import React from "react";

const AdminPage = () => {
	return (
		<div className="p-4 flex flex-col gap-4 md:flex-row">
			<div className="w-full lg:w-2/3">
				<div className="flex gap-4 justify-between flex-wrap">
					<UserCards type="admin" />
					<UserCards type="teacher" />
					<UserCards type="parent" />
					<UserCards type="student" />
				</div>
			</div>
			<div className="w-full lg:w-1/3"></div>
		</div>
	);
};

export default AdminPage;
