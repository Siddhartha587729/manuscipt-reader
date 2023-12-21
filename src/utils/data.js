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
export const fetchUserById = (id)=>{
    const query = `*[_type=='author' && _id=='${id}']{
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
    return query;
}
export const fetchData = (id) =>{
    const query = `*[_type=='script' && author._ref=='${id}']{
        hole_position,
        classId,
        end,
        noOfPlamLeaves,
        CPD,
        pageNo,
        _createdAt,
        details,
        paints,
        coloPhone,
        line,
        title,
        density,
        language,
        letters,
        folio_number,
        notes,
        dimmentions,
        genre,
        condition,
        begining,
        size,
        remarks,
    }`
    return query;
} 