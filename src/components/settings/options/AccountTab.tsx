import { useState } from "react"
import LinkButton from "components/common/LinkButton";
import Logout from "components/auth/Logout";

export default function AccountTab() {
  const [modifying, setModifying] = useState(false);
  
  // const [] = useState();
  //SHOW REAL USER INFORMATION

  const [user, setUser] = useState({});

  return (
    <>
      <div className="flex flex-col w-full items-center space-y-8 mt-4 bg-ndex-background-1">
        <div className="flex flex-col w-[80%] p-12 space-y-4 justify-center rounded-lg bg-ndex-background-2">
          <div className="space-y-2 font-bold">
            <div className=""> Edit Profile </div>
            <div className="text-ndex-text-grey text-sm">
                Display Name
            </div>
            <div className="text-md">
                {"John Smith"}
            </div>
          </div>
          <div className="space-y-2 font-bold">
            <div className="text-ndex-text-grey">
              Email
            </div>
            <div>
              {"johnsmith@orchid.ai"}
            </div>
          </div>
          <div className="space-y-2 font-bold">
            <div className="text-ndex-text-grey">
              Password
            </div>
            <div>
              •••••••••••••••
            </div>
          </div>
        </div>

        {/* {modifying ? (
          <LinkButton onClick={() => setModifying((prev) => !prev)}>
            Cancel
          </LinkButton>
        ) : (
          <LinkButton onClick={() => setModifying((prev) => !prev)}>
            Modify
          </LinkButton>
        )}

        <div>
          <input
            type="text"
            placeholder="Frying Pan"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt text-base">Name</span>
          </label>
        </div>

        <div>
          <input
            type="email"
            placeholder="FryingPan@gmail.com"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt text-base">Email</span>
          </label>
        </div>

        <div className="flex flex-row space-x-10">
          <div>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt text-base">Password</span>
            </label>
          </div>

          {modifying && (
            <div>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text-alt text-base">
                  Confirm Password
                </span>
              </label>
            </div>
          )}
        </div>
        {modifying && (
          <LinkButton
            onClick={() => setModifying((prev) => !prev)}
          >
            Confirm
          </LinkButton>
        )} */}
      </div>

      <Logout className="mt-4" />
    </>
  )
}
