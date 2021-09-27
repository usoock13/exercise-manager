import { GetCounterItems } from "../../extra-modules/dynamodb";

export default (req, res) => {
    if(req.method === "POST") {
        let items = [];
        GetCounterItems(async (err, data) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Query!");
                await data.Items.forEach(item => {
                    console.log(item);
                    items.push(item);
                })
                res.status(200).json(items);
            }
        })
    }
}