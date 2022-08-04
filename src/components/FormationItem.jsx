import React from 'react';

function FormationItem({ title, icon, description, subTitle }) {
	return (
		<div className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:-translate-y-2 transform transition rounded-md p-5">
			<div className="text-gray-800 dark:text-gray-300 w-6 h-6 mb-3">
				{icon}
			</div>
			<h1 className="font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1 underline underline-offset-1">
				{title}
			</h1>
			<h2 className="font-semibold text-sm text-gray-600 dark:text-gray-200 mb-1">
				{subTitle}
			</h2>
			<p className="text-md text-gray-600 dark:text-gray-300">{description}</p>
		</div>
	);
}

export default FormationItem;