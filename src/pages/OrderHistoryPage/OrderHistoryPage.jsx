import * as userService from '../../utilities/users-service';

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await userService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>Green recipes fam</h1>
        <div>
        </div>
                
      
    </>
  );
}