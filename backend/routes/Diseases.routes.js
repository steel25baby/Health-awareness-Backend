import { Router } from "express";
import {PrismaClient} from "@prisma/client"

const router=Router();
const prisma = new PrismaClient();

router.get("/", async (req, res)=>{
    try {
        const diseases = await prisma.disease.findMany();
        res.status(200).json({success:true, diseases});
    } catch (error) {
       res.status(500).json({success: false, message: "couldn't get the diseases"}) 
    }
})

router.post("/search",async (req, res)=>{
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
} )
router.get("/:id", async (req, res)=>{
    const id = req.params.id;
    try {
       const disease = await prisma.disease.findFirst({
        where: {id: id}
       })
        if(!disease){
            res.status(404).json({message: "not found"})
        }
        else{
            res.status(200).json({success:true, disease})
        }
    
       
    } catch (error) {
        res.status(500).json({success: false, message:"Couldn't get the disease"})
    }
})
router.patch("/:id", async (req, res) => {
    const { commonName, scientificName, diseaseAbout, diseaseCause, diseaseTreatment } = req.body;
    const id = req.params.id;

    try {
        
        const data = {};
        if (commonName) data.commonName = commonName;
        if (scientificName) data.scientificName = scientificName;
        if (diseaseAbout) data.diseaseAbout = diseaseAbout;
        if (diseaseCause) data.diseaseCause = diseaseCause;
        if (diseaseTreatment) data.diseaseTreatment = diseaseTreatment;

        
        if (Object.keys(data).length === 0) {
            return res.status(400).json({ success: false, message: "No valid fields to update" });
        }

        
        const updatedDisease = await prisma.disease.update({
            where: { id: id },
            data: data
        });

        res.status(200).json({ success: true, data: updatedDisease });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "There is a problem with the server" });
    }
});

router.delete("/:id",async (req, res)=>{
    const id = req.params.id;
    try {
        const deletedisease = await prisma.disease.delete({
            where:{id: id}
        })
        res.status(200).json({success:true, disease})
    } catch (error) {
        res.status(500).json({success:false, message:"couldn't delete the disease"})
    }
})    


export default router;