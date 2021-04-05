const candidateTestmodel = require("../../models/candidateTest.js");
const express = require("express");
const router = express.Router();

//Add Test
router.post("/addTest", async (req, res) => {

    const title = req.body.title;
    const description = req.body.description;
    const type = req.body.type;
    const tags = req.body.tags;
    const result = req.body.result;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;

    const ev = new candidateTestmodel({
        title: title,
        description: description,
        type: type,
        tags: tags,
        result: result,
        startDate: startDate,
        endDate: endDate
    });

    try {
        await ev.save();
        res.json(ev);
        console.log("test ++");
    }catch(err){
        console.log("Error to add test");
    }

});

//View All Tests
router.get("/allTests", function (req,res) {
    console.log("Get all tests");
    candidateTestmodel.find({}).exec(function (err, test) {
        if (err) {
            console.log("Error View All Tests");
        } else {
            res.json(test);
        }
    });
});

//Update Test
router.put("/updateTest/:id", function (req, res) {
    console.log("update Test");
    candidateTestmodel.findByIdAndUpdate(req.params.id,
        {
            $set: {
                title: req.body.title,
                description: req.body.description,
                type: req.body.type,
                tags: req.body.tags,
                result: req.body.result,
                startDate: req.body.startDate,
                endDate: req.body.endDate

            },
        },

        {
            new: true,
        },
        function (err, updated) {
            if (err) {
                res.send("Error updating");
            } else {
                res.json(updated);
                console.log("test updated ++");
            }
        }
    );
});


//Delete Test
router.delete("/deleteTest/:id", function (req, res) {

    console.log("TestReducer deleted -- ");
    candidateTestmodel.findOneAndDelete(req.params.id, function (err, deleted) {
        if (err) {
            res.send("error deleting");
        } else {
            res.json(deleted);
        }
    });

});


module.exports = router;

