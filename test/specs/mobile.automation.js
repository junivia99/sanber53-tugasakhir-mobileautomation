
const myElem = await $('com.fghilmany.dietmealapp:id/header_welcome');

describe('Open Application',() =>{
    it('should open apps', async() =>{
        await expect(myElem).toHaveTextContaining('Welcome...');
        deleteSession();
    })
})