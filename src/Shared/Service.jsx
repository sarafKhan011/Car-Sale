const FormatResult=(resp)=>{
    let result=[];
    let finalResult=[];

    resp.froEach((item)=>{
        const listingId=item.carListing?.id;
        if(!result[listingId])
        {
            result[listingId]={
                car:item.carListing,
                carImages:[]
            }
        }
        if(item.carImages)
        {
            result[listingId].images.push(item.carImages)
        }
    })


    result.forEach((item)=>{
        finalResult.push({
            ...item.car,
            images:item.images
        })
    })

    return finalResult;

}