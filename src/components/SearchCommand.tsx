import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
  useKBar,
  useRegisterActions,
  ActionImpl,
  Action,
} from "kbar"
import { useState, useEffect } from "react"

const defaultActions: Action[] = [
  {
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "writing words",
    perform: () => (window.location.pathname = "blog"),
  },
  {
    id: "contact",
    name: "Contact",
    shortcut: ["c"],
    keywords: "email",
    perform: () => (window.location.pathname = "contact"),
  },
]

export default function SearchCommandPalette() {
  const { queryValue } = useKBar((state) => ({
    queryValue: state.searchQuery,
  }))
  console.log(queryValue)
  const [actions, setActions] = useState(defaultActions)

  const userSearch: Action[] = [
    {
      id: "userSearch",
      name: `ok + ${queryValue}`,
      perform: () => console.log(queryValue),
    },
  ]
  useRegisterActions(userSearch, [actions])

  return (
    <KBarPortal>
      {" "}
      <KBarPositioner>
        {" "}
        <KBarAnimator>
          {" "}
          <KBarSearch />
          <PaletteResults res={userSearch} />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}

function PaletteResults({ res }) {
  const { results } = useMatches()

  return (
    <KBarResults
      items={res}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div
            style={{
              background: active ? "#eee" : "transparent",
            }}
          >
            {item.name}
          </div>
        )
      }
    />
  )
}
