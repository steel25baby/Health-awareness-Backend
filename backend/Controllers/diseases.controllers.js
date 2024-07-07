export const createDisease =async (req, res)=>{
    try {
        const {commonName, scientificName, diseaseAbout, diseaseCause, diseaseTreatment} = req.body;
        const newDisease = await prisma.disease.create({
            data:{
                commonName,
                scientificName,
                diseaseAbout,
                diseaseCause,
                diseaseTreatment
            },
            select:{
                commonName: true,
                scientificName: true,
                diseaseAbout: true,
                diseaseCause: true,
                diseaseTreatment: true
            }
        })
        res.status(201).json({success:true, data:newDisease})
    } catch (error) {
        res.status(500).json({success:false, message: "An error occured in the server "})
    }
}