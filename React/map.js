const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React via npm." },
];

// 하드코딩 방식

// function Blog() {
//   return (
//     <div>
//       <div>
//         <h3>{posts[0].title}</h3>
//         <p>{posts[0].content}</p>
//       </div>
//       <div>
//         <h3>{posts[1].title}</h3>
//         <p>{posts[1].content}</p>
//       </div>
//     </div>
//   );
// }

// Map 사용

function Blog() {
  const blogs = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return <div className="post-wrapper">{blogs}</div>;
}
