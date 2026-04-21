9. The product manager asks for transactions to update automatically without a page refresh. Would you
use WebSockets, polling, or Server-Sent Events — and why?


Ans: I would use Server_sent events for this scenario because the requirements is unidirectional updates from server to client. It is simpler than Websockets and more efficient than plling.



10. A senior engineer proposes adding Redux to this codebase. A colleague says it is unnecessary. Where
do you stand, and what would drive your decision?


Ans: For this application, React's local state and hooks are sufficient. Intriducing Redux would add unnecessory complexity without clear benefit. I would reconsider it if the app grows ins size or shared stae increases.