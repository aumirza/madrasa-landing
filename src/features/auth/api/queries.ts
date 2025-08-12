// store queries here, if gets large then breakup query as file
//  Define a proper type of data that is returned form server and attach it with query

// export function useGetProfileQuery() {
//   return useQuery({
//     queryKey: 'profile',
//     queryFn:  () =>  axios.get<IResponse<IUserResponse>>(ENDPOINTS.PROFILE),
//     select: (data) => data.data,
//   });
// }

// export function useGetUsersPaginatedQuery() {
//   return useQuery({
//     queryKey: 'users',
//     queryFn:  () =>  axios.get<IResponse<IPaginated<IUsersResponse>>>(ENDPOINTS.USERS),
//     select: (data) => data.data,
//   });
// }
