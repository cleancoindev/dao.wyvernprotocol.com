import Home from './pages/Home.vue'
import Proposals from './pages/Proposals.vue'
import Proposal from './pages/Proposal.vue'
import CreateProposal from './pages/CreateProposal.vue'
import Assets from './pages/Assets.vue'
import Shareholders from './pages/Shareholders.vue'
import Delegates from './pages/Delegates.vue'
import Help from './pages/Help.vue'

export default [
  { path: '/', component: Home },
  { path: '/proposals', component: Proposals },
  { path: '/proposals/create', component: CreateProposal },
  { path: '/proposals/:id', component: Proposal },
  { path: '/assets', component: Assets },
  { path: '/shareholders', component: Shareholders },
  { path: '/delegates', component: Delegates },
  { path: '/help', component: Help }
]
