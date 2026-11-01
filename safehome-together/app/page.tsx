"use client";

import { useState } from "react";
import RoomScene from "@/components/room-scene";

type Task = {
  id: string;
  label: string;
  area: string;
  done: boolean;
};

type FeedItem = {
  id: string;
  who: string;
  what: string;
  when: string;
};

const initialTasks: Task[] = [
  { id: "t1", label: "Wipe the kitchen counters", area: "Kitchen", done: false },
  { id: "t2", label: "Water the plants", area: "Living room", done: true },
  { id: "t3", label: "Take out the recycling", area: "Whole home", done: false },
  { id: "t4", label: "Laundry — darks", area: "Bathroom", done: false },
  { id: "t5", label: "Vacuum the living room", area: "Living room", done: false },
  { id: "t6", label: "Refill the water filter", area: "Kitchen", done: false },
  { id: "t7", label: "Change the hallway lightbulb", area: "Hallway", done: false },
];

const initialFeed: FeedItem[] = [
  { id: "f1", who: "Maya", what: "completed “Water the plants”", when: "5m ago" },
  { id: "f2", who: "Leo", what: "joined the room", when: "1h ago" },
  { id: "f3", who: "Sam", what: "added “Laundry — darks”", when: "Yesterday" },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [tab, setTab] = useState<"checklist" | "activity">("checklist");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [feed, setFeed] = useState<FeedItem[]>(initialFeed);

  const who = nickname.trim() || "Someone";
  const doneCount = tasks.filter((t) => t.done).length;

  function toggleTask(id: string) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;
    const nowDone = !task.done;
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: nowDone } : t)));
    setFeed((prev) =>
      [
        {
          id: `${id}-${Date.now()}`,
          who,
          what: nowDone ? `completed “${task.label}”` : `reopened “${task.label}”`,
          when: "Just now",
        },
        ...prev,
      ].slice(0, 12),
    );
  }

  return (
    <div className="mx-auto flex h-dvh w-full max-w-md flex-col">
      <header className="shrink-0 border-b border-line bg-background/90 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              SafeHome
            </p>
            <h1 className="text-xl font-bold tracking-tight">Together</h1>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-soft text-sm font-bold text-accent ring-1 ring-line">
            {initials(who)}
          </div>
        </div>
        <label htmlFor="nickname" className="mt-3 block">
          <span className="mb-1 block text-xs font-medium text-muted">Nickname</span>
          <input
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Who's home?"
            maxLength={24}
            autoComplete="off"
            autoCorrect="off"
            className="h-12 w-full rounded-2xl bg-surface px-4 text-base font-medium text-ink ring-1 ring-line outline-none transition placeholder:text-muted focus:ring-2 focus:ring-accent"
          />
        </label>
      </header>

      <main className="scroll-area flex-1 overflow-y-auto px-4 pt-4">
        <section className="relative overflow-hidden rounded-3xl bg-surface ring-1 ring-line shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_36px_-20px_rgba(42,39,35,0.4)]">
          <RoomScene className="h-auto w-full" />
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-surface/90 px-3 py-1.5 text-xs font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {doneCount} of {tasks.length} done today
          </div>
        </section>
        <p className="px-1 pb-4 pt-3 text-sm text-muted">
          {nickname.trim()
            ? `Good to see you, ${nickname.trim()}. Tap a task below to pitch in.`
            : "Add your nickname, then tap a task below to pitch in."}
        </p>
      </main>

      <section className="shrink-0 rounded-t-3xl border-t border-line bg-surface shadow-[0_-8px_24px_-16px_rgba(42,39,35,0.35)]">
        <div className="flex justify-center pt-3">
          <div className="flex rounded-full bg-background p-1" role="tablist" aria-label="Bottom panel">
            {(["checklist", "activity"] as const).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`h-9 rounded-full px-5 text-sm font-semibold capitalize transition active:scale-95 ${
                  tab === t
                    ? "bg-surface text-ink shadow-sm"
                    : "text-muted"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="scroll-area h-[38vh] min-h-56 overflow-y-auto px-4 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
          {tab === "checklist" ? (
            <ul className="flex flex-col gap-2">
              {tasks.map((task) => (
                <li key={task.id}>
                  <button
                    onClick={() => toggleTask(task.id)}
                    aria-pressed={task.done}
                    className="flex h-14 w-full items-center gap-3 rounded-2xl px-3 text-left ring-1 ring-line transition active:scale-[0.98] active:bg-accent-soft/60"
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl border-2 transition ${
                        task.done
                          ? "border-accent bg-accent text-surface"
                          : "border-line bg-background"
                      }`}
                    >
                      {task.done && (
                        <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none">
                          <path
                            d="M2.5 6.5l2.5 2.5 4.5-5.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`flex-1 text-[15px] font-medium transition ${
                        task.done ? "text-muted line-through" : "text-ink"
                      }`}
                    >
                      {task.label}
                    </span>
                    <span className="rounded-full bg-background px-2.5 py-1 text-[11px] font-semibold text-muted">
                      {task.area}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-1">
              {feed.map((item) => (
                <li key={item.id} className="flex items-start gap-3 rounded-2xl p-2 transition active:bg-background">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent">
                    {initials(item.who)}
                  </span>
                  <span className="flex-1 pt-0.5 text-sm leading-5">
                    <span className="font-semibold">{item.who}</span>{" "}
                    <span className="text-muted">{item.what}</span>
                  </span>
                  <span className="shrink-0 pt-0.5 text-xs text-muted">{item.when}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
