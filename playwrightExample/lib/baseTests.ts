import {test as baseTest} from '@playwright/test';
import {RunPage} from "@pages/runPage";


const test = baseTest.extend<{
	runPage: RunPage;

}>({
	runPage: async ({page, context}, use) => {
		await use(new RunPage(page, context));
	}
})

export default test;