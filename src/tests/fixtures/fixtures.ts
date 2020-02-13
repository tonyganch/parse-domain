import {promises as fs} from "fs";
import {resolve} from "path";
import {fetchPsl} from "../../psl/fetch-psl";

const pathToPslFixture = resolve(__dirname, "public-suffix-list.txt");

export const updatePslFixture = async () => {
	const psl = await fetchPsl();

	return await fs.writeFile(pathToPslFixture, psl);
};

export const readPslFixture = async () => {
	return await fs.readFile(pathToPslFixture, "utf8");
};
