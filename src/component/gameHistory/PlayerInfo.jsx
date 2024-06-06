import ProtoTypes from "prop-types";


// createdAt={user.createdAt}
//                     userId={user.userId}
//                     ballposition={user.ballposition}
//                     beforeplaypoint={user.beforeplaypoint}
//                     play={user.play}
//                     won={user.won}
// afterplaypoint = { user.afterplaypoint }
                    

function PlayerInfo({ createdAt,userId,ballposition,beforeplaypoint,play,won,afterplaypoint}) {
  return (
    <tr className="border-b border-bgray-300 dark:border-darkblack-400">
      
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <div className="flex w-full items-center space-x-2.5">
          
          <p className="text-base font-semibold text-bgray-900 dark:text-white">
            {createdAt}
          </p>
        </div>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {userId}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {ballposition}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-semibold text-bgray-900 dark:text-white">
          {beforeplaypoint}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
        ₹{play}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {won}
        </p>
      </td>
      <td className="w-[165px] px-6 py-5 xl:px-0">
        <p className="text-base font-medium text-bgray-900 dark:text-white">
          {afterplaypoint}
        </p>
      </td>
      
    </tr>
  );
}

// PlayerInfo.propTypes = {
//   UserId:ProtoTypes.string,
//   UserName:ProtoTypes.string,
//   MobileNo:ProtoTypes.string,
//   GamePlay:ProtoTypes.Number,
//   MainWallet:ProtoTypes.Number,
//   RegistrationDate:ProtoTypes.string,
//   LastLogin:ProtoTypes.string,
//   Block:ProtoTypes.string,
//   Status:ProtoTypes.string
// };

export default PlayerInfo;
