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
} from "kbar";
import { useState, useEffect } from "react";

const defaultActions = [
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
];

export default function SearchCommandPalette() {
  const { queryValue } = useKBar((state) => ({
    queryValue: state.searchQuery,
  }));
  const [actions, setActions] = useState(defaultActions);

  const userSearch = [
    {
      id: "userSearch",
      name: "hello world",
      perform: () => console.log(queryValue),
    },
  ];
  useRegisterActions(userSearch, [actions]);

  return (
    <KBarPortal>
      {" "}
      <KBarPositioner>
        {" "}
        <KBarAnimator>
          {" "}
          <KBarSearch />
          <PaletteResults />
          {defaultActions.map((action) => action.name)}
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  );
}

function PaletteResults() {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
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
  );
}
