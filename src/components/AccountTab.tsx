import { useState } from "react"
import Button from "./Button"

export default function AccountTab() {
  const [modifying, setModifying] = useState(false)
  return (
    <>
      <div className="flex flex-col space-y-8 mx-8 mt-12">
        {modifying ? (
          <Button text="Cancel" onClick={() => setModifying((prev) => !prev)} />
        ) : (
          <Button text="Modify" onClick={() => setModifying((prev) => !prev)} />
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
          <Button
            text="Confirm"
            onClick={() => setModifying((prev) => !prev)}
          />
        )}
      </div>
    </>
  )
}
