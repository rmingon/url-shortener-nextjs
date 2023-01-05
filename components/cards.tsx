import Card from "./molecules/card";

export default function Cards () {
  return (
    <div className="flex flex-row px-12 justify-around space-x-12 mt-8">
      <Card
        comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
        title={'Custom Domains'}
        count={1}
      >
          <svg width="42" height="42" viewBox="0 0 16 16"><g fill="#888888"><path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199a2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/><path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/></g></svg>
      </Card>
      <Card
        comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
        title={'Track Click'}
        count={2}
      >
        <svg width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M7 15v2m3-6v6m3-4v4"/></g></svg>
      </Card>
      <Card
        comment={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.ssimus quasi recusandae rem ullam voluptate!'}
        title={'Statistics'}
        count={3}
      >
        <svg width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="14" cy="6" r="2"/><path d="M4 6h8m4 0h4"/><circle cx="8" cy="12" r="2"/><path d="M4 12h2m4 0h10"/><circle cx="17" cy="18" r="2"/><path d="M4 18h11m4 0h1"/></g></svg>
      </Card>
    </div>
  )
}