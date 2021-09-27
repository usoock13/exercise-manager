import { GetCounterItems } from "../../extra-modules/dynamodb";

export default (req, res) => {
    if(req.method === "POST") {
        console.log(req.headers);
        let items = [];
        GetCounterItems(async (err, data) => {
            if(err) {
                console.error(err);
            } else {
                await data.Items.forEach(item => {
                    items.push(item);
                })
                res.status(200).json(items);
            }
        })
    }
}