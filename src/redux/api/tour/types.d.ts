namespace TOURS {
	interface ITourPackages {
		category: string
		ajy: string
		is_active: string 
		start_date: string
		end_date: string
		min_seats: string
	}
	type GetTourPackagesResponse = ITourPackages[]

	type GetTourPackagesRequest = void
}
