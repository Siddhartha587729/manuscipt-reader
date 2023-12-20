export const fetchuser =`*[_type=='author'] | order(_createdAt,desc){
    _createdAt,
    _id,
    author,
    coverImage{
        asset->{
            url
        }   
    },
    organisation,
    title,
    username
}`