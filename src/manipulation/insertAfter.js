import { fn } from "../setup";
import insertSelectors from "./helper/insertSelectors";

fn.insertAfter = function() {
	return insertSelectors( arguments, this, true, false, false, false, false, true );
};
