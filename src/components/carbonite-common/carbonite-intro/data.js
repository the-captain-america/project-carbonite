const bolt = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+ICAgIDx0aXRsZT4gICAgICAgIGxpZ2h0bmluZyAgICA8L3RpdGxlPiAgICA8cGF0aCBmaWxsPSIjRjRGNEY0IiBkPSJNMTM4LjA4OSAyNTkuNDM0aDg4LjQ2YTE0LjE1MSAxNC4xNTEgMCAwIDEgMTMuODEgMTcuMjMzTDIwNS45MjMgNDMxLjAxbDE1Ni40NDMtMTkwLjQ0NWgtODguNDU5YTE0LjE1MiAxNC4xNTIgMCAwIDEtMTMuODExLTE3LjIzM2wzNC40MzctMTU0LjM0NC0xNTYuNDQ0IDE5MC40NDV6TTE3OS4xODQgNTAwYTE0LjE1IDE0LjE1IDAgMCAxLTEzLjgwNi0xNy4yMzRsNDMuNTE0LTE5NS4wM2gtMTAwLjc0YTE0LjE1MyAxNC4xNTMgMCAwIDEtMTAuOTM2LTIzLjEzM0wzMTAuMzMyIDUuMTdhMTQuMTUyIDE0LjE1MiAwIDAgMSAyNC43NDYgMTIuMDY0bC00My41MTQgMTk1LjAzaDEwMC43NDFhMTQuMTUgMTQuMTUgMCAwIDEgMTAuOTM1IDIzLjEzM0wxOTAuMTI0IDQ5NC44M2ExNC4xNDkgMTQuMTQ5IDAgMCAxLTEwLjk0IDUuMTd6Ii8+PC9zdmc+`;

export const getData = options => [
	{
		id: 0,
		title: "",
		sub: "",
		icon: "",
		details: "",
		positionX: {
			desktop: -75,
			mobile: -35,
			tablet: 70
		}[options.size || "desktop"],
		positionY: { desktop: 77, mobile: 78, tablet: 75 }[
			options.size || "desktop"
		],
		caretX: { desktop: 20, mobile: 75 }[options.size || "desktop"],
	},
	{
		id: 1,
		title: "",
		sub: "",
		icon: "",
		details: "",
		positionX: {
			desktop: -75,
			mobile: -35,
			tablet: 70
		}[options.size || "desktop"],
		positionY: { desktop: 77, mobile: 78, tablet: 75 }[
			options.size || "desktop"
		],
		caretX: { desktop: 20, mobile: 75 }[options.size || "desktop"],
	},
	{
		id: 2,
		title: "",
		sub: "",
		icon: "",
		details: "",
		positionX: {
			desktop: -75,
			mobile: -35,
			tablet: 70
		}[options.size || "desktop"],
		positionY: { desktop: 77, mobile: 78, tablet: 75 }[
			options.size || "desktop"
		],
		caretX: { desktop: 20, mobile: 75 }[options.size || "desktop"],
	},
	{
		id: 3,
		title: "Welcome to our new search experience!",
		sub: "Save your favourites",
		icon: "saved",
		details: "Save your favourite items with the bookmark icon in the search results to easily find them later in your saved items",
		positionX: {
			desktop: -103,
			mobile: -35,
			tablet: 70
		}[options.size || "desktop"],
		positionY: { desktop: 77, mobile: 78, tablet: 75 }[
			options.size || "desktop"
		],
		caretX: { desktop: 15, mobile: 75 }[options.size || "desktop"],
	}
];
