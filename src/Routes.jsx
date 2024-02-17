import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Forun = React.lazy(() => import("pages/Forun"));
const AdvertisementOne = React.lazy(() => import("pages/AdvertisementOne"));
const AdvertisementTwo = React.lazy(() => import("pages/AdvertisementTwo"));
const Advertisement = React.lazy(() => import("pages/Advertisement"));
const Wallet = React.lazy(() => import("pages/Wallet"));
const GameOpened = React.lazy(() => import("pages/GameOpened"));
const GamesTwo = React.lazy(() => import("pages/GamesTwo"));
const AddReels = React.lazy(() => import("pages/AddReels"));
const Reels = React.lazy(() => import("pages/Reels"));
const Live = React.lazy(() => import("pages/Live"));
const Subscription = React.lazy(() => import("pages/Subscription"));
const Videos = React.lazy(() => import("pages/Videos"));
const Memories = React.lazy(() => import("pages/Memories"));
const ProductOpened = React.lazy(() => import("pages/ProductOpened"));
const Marketplace = React.lazy(() => import("pages/Marketplace"));
const MarketplaceTwo = React.lazy(() => import("pages/MarketplaceTwo"));
const PostJobOpening = React.lazy(() => import("pages/PostJobOpening"));
const JobOpened = React.lazy(() => import("pages/JobOpened"));
const JobsOne = React.lazy(() => import("pages/JobsOne"));
const HomeTwo = React.lazy(() => import("pages/HomeTwo"));
const GroupsMyGroups = React.lazy(() => import("pages/GroupsMyGroups"));
const GroupsGroupsyoufollow = React.lazy(
  () => import("pages/GroupsGroupsyoufollow"),
);
const GroupsDiscoverOne = React.lazy(() => import("pages/GroupsDiscoverOne"));
const H = React.lazy(() => import("pages/H"));
const LoadingSeven = React.lazy(() => import("pages/LoadingSeven"));
const CreateGroupOne = React.lazy(() => import("pages/CreateGroupOne"));
const CreateGroup = React.lazy(() => import("pages/CreateGroup"));
const CreateGroupFive = React.lazy(() => import("pages/CreateGroupFive"));
const Search = React.lazy(() => import("pages/Search"));
const Games = React.lazy(() => import("pages/Games"));
const ApplyFilterOne = React.lazy(() => import("pages/ApplyFilterOne"));
const PagePrototype = React.lazy(() => import("pages/PagePrototype"));
const LoadingSix = React.lazy(() => import("pages/LoadingSix"));
const PageMyPages = React.lazy(() => import("pages/PageMyPages"));
const PagePagesyoufollowOne = React.lazy(
  () => import("pages/PagePagesyoufollowOne"),
);
const PagePagesyoufollow = React.lazy(() => import("pages/PagePagesyoufollow"));
const PageDiscoverOne = React.lazy(() => import("pages/PageDiscoverOne"));
const PageDiscover = React.lazy(() => import("pages/PageDiscover"));
const GamesOne = React.lazy(() => import("pages/GamesOne"));
const LoadingFive = React.lazy(() => import("pages/LoadingFive"));
const CreateGroupFour = React.lazy(() => import("pages/CreateGroupFour"));
const CreateGroupThree = React.lazy(() => import("pages/CreateGroupThree"));
const CreateGroupTwo = React.lazy(() => import("pages/CreateGroupTwo"));
const Jobs = React.lazy(() => import("pages/Jobs"));
const LoadingFour = React.lazy(() => import("pages/LoadingFour"));
const CreatePageOne = React.lazy(() => import("pages/CreatePageOne"));
const CreatePageTwo = React.lazy(() => import("pages/CreatePageTwo"));
const CreatePageThree = React.lazy(() => import("pages/CreatePageThree"));
const CreatePage = React.lazy(() => import("pages/CreatePage"));
const PageMyPagesOne = React.lazy(() => import("pages/PageMyPagesOne"));
const Explore = React.lazy(() => import("pages/Explore"));
const MemoriesMyMemories = React.lazy(() => import("pages/MemoriesMyMemories"));
const MemoriesCreateNew = React.lazy(() => import("pages/MemoriesCreateNew"));
const Movies = React.lazy(() => import("pages/Movies"));
const Forums = React.lazy(() => import("pages/Forums"));
const ApplyFilter = React.lazy(() => import("pages/ApplyFilter"));
const HomeViewProfile = React.lazy(() => import("pages/HomeViewProfile"));
const HomeAllFriends = React.lazy(() => import("pages/HomeAllFriends"));
const HomeFriendRequestSeeall = React.lazy(
  () => import("pages/HomeFriendRequestSeeall"),
);
const HomeAddPeopleSeeall = React.lazy(
  () => import("pages/HomeAddPeopleSeeall"),
);
const LoadingOne = React.lazy(() => import("pages/LoadingOne"));
const Points = React.lazy(() => import("pages/Points"));
const Emoticons = React.lazy(() => import("pages/Emoticons"));
const Messages = React.lazy(() => import("pages/Messages"));
const MyProfile = React.lazy(() => import("pages/MyProfile"));
const Activities = React.lazy(() => import("pages/Activities"));
const StoriesCreateStorySettings = React.lazy(
  () => import("pages/StoriesCreateStorySettings"),
);
const Loading = React.lazy(() => import("pages/Loading"));
const StoriesOthersStory = React.lazy(() => import("pages/StoriesOthersStory"));
const StoriesOthersStoryOne = React.lazy(
  () => import("pages/StoriesOthersStoryOne"),
);
const StoriesMyStory = React.lazy(() => import("pages/StoriesMyStory"));
const StoriesCreateStory = React.lazy(() => import("pages/StoriesCreateStory"));
const Logout = React.lazy(() => import("pages/Logout"));
const StoriesCreateStoryOne = React.lazy(
  () => import("pages/StoriesCreateStoryOne"),
);
const LoadingThree = React.lazy(() => import("pages/LoadingThree"));
const Interests = React.lazy(() => import("pages/Interests"));
const AgeGender = React.lazy(() => import("pages/AgeGender"));
const Name = React.lazy(() => import("pages/Name"));
const EnterCodeOne = React.lazy(() => import("pages/EnterCodeOne"));
const Createnewaccount = React.lazy(() => import("pages/Createnewaccount"));
const LoadingTwo = React.lazy(() => import("pages/LoadingTwo"));
const HomeCreateNewPostTagPeople = React.lazy(
  () => import("pages/HomeCreateNewPostTagPeople"),
);
const HomeCreateNewPost = React.lazy(() => import("pages/HomeCreateNewPost"));
const HomeCreateNew = React.lazy(() => import("pages/HomeCreateNew"));
const SetNewPassword = React.lazy(() => import("pages/SetNewPassword"));
const EnterCode = React.lazy(() => import("pages/EnterCode"));
const ResetPassword = React.lazy(() => import("pages/ResetPassword"));
const RecoverAccount = React.lazy(() => import("pages/RecoverAccount"));
const Login = React.lazy(() => import("pages/Login"));
const MembershipArea = React.lazy(() => import("pages/MembershipArea"));
const Success = React.lazy(() => import("pages/Success"));
const Payments = React.lazy(() => import("pages/Payments"));
const TribeentrylevelsSignup = React.lazy(
  () => import("pages/TribeentrylevelsSignup"),
);
const Tribeentrylevels = React.lazy(() => import("pages/Tribeentrylevels"));
const HomeOne = React.lazy(() => import("pages/HomeOne"));
const Support = React.lazy(() => import("pages/Support"));
const About = React.lazy(() => import("pages/About"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Job = React.lazy(() => import("pages/Job"));
const HomeCreateNewCreateJob = React.lazy(
  () => import("pages/HomeCreateNewCreateJob"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/homecreatenewcreatejob"
            element={<HomeCreateNewCreateJob />}
          />
          <Route path="/job" element={<Job />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/homeone" element={<HomeOne />} />
          <Route path="/tribeentrylevels" element={<Tribeentrylevels />} />
          <Route
            path="/tribeentrylevelssignup"
            element={<TribeentrylevelsSignup />}
          />
          <Route path="/payments" element={<Payments />} />
          <Route path="/success" element={<Success />} />
          <Route path="/membershiparea" element={<MembershipArea />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recoveraccount" element={<RecoverAccount />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/entercode" element={<EnterCode />} />
          <Route path="/setnewpassword" element={<SetNewPassword />} />
          <Route path="/homecreatenew" element={<HomeCreateNew />} />
          <Route path="/homecreatenewpost" element={<HomeCreateNewPost />} />
          <Route
            path="/homecreatenewposttagpeople"
            element={<HomeCreateNewPostTagPeople />}
          />
          <Route path="/loadingtwo" element={<LoadingTwo />} />
          <Route path="/createnewaccount" element={<Createnewaccount />} />
          <Route path="/entercodeone" element={<EnterCodeOne />} />
          <Route path="/name" element={<Name />} />
          <Route path="/agegender" element={<AgeGender />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/loadingthree" element={<LoadingThree />} />
          <Route
            path="/storiescreatestoryone"
            element={<StoriesCreateStoryOne />}
          />
          <Route path="/logout" element={<Logout />} />
          <Route path="/storiescreatestory" element={<StoriesCreateStory />} />
          <Route path="/storiesmystory" element={<StoriesMyStory />} />
          <Route
            path="/storiesothersstoryone"
            element={<StoriesOthersStoryOne />}
          />
          <Route path="/storiesothersstory" element={<StoriesOthersStory />} />
          <Route path="/loading" element={<Loading />} />
          <Route
            path="/storiescreatestorysettings"
            element={<StoriesCreateStorySettings />}
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/emoticons" element={<Emoticons />} />
          <Route path="/points" element={<Points />} />
          <Route path="/loadingone" element={<LoadingOne />} />
          <Route
            path="/homeaddpeopleseeall"
            element={<HomeAddPeopleSeeall />}
          />
          <Route
            path="/homefriendrequestseeall"
            element={<HomeFriendRequestSeeall />}
          />
          <Route path="/homeallfriends" element={<HomeAllFriends />} />
          <Route path="/homeviewprofile" element={<HomeViewProfile />} />
          <Route path="/applyfilter" element={<ApplyFilter />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/memoriescreatenew" element={<MemoriesCreateNew />} />
          <Route path="/memoriesmymemories" element={<MemoriesMyMemories />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/pagemypagesone" element={<PageMyPagesOne />} />
          <Route path="/createpage" element={<CreatePage />} />
          <Route path="/createpagethree" element={<CreatePageThree />} />
          <Route path="/createpagetwo" element={<CreatePageTwo />} />
          <Route path="/createpageone" element={<CreatePageOne />} />
          <Route path="/loadingfour" element={<LoadingFour />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/creategrouptwo" element={<CreateGroupTwo />} />
          <Route path="/creategroupthree" element={<CreateGroupThree />} />
          <Route path="/creategroupfour" element={<CreateGroupFour />} />
          <Route path="/loadingfive" element={<LoadingFive />} />
          <Route path="/gamesone" element={<GamesOne />} />
          <Route path="/pagediscover" element={<PageDiscover />} />
          <Route path="/pagediscoverone" element={<PageDiscoverOne />} />
          <Route path="/pagepagesyoufollow" element={<PagePagesyoufollow />} />
          <Route
            path="/pagepagesyoufollowone"
            element={<PagePagesyoufollowOne />}
          />
          <Route path="/pagemypages" element={<PageMyPages />} />
          <Route path="/loadingsix" element={<LoadingSix />} />
          <Route path="/pageprototype" element={<PagePrototype />} />
          <Route path="/applyfilterone" element={<ApplyFilterOne />} />
          <Route path="/games" element={<Games />} />
          <Route path="/search" element={<Search />} />
          <Route path="/creategroupfive" element={<CreateGroupFive />} />
          <Route path="/creategroup" element={<CreateGroup />} />
          <Route path="/creategroupone" element={<CreateGroupOne />} />
          <Route path="/loadingseven" element={<LoadingSeven />} />
          <Route path="/h" element={<H />} />
          <Route path="/groupsdiscoverone" element={<GroupsDiscoverOne />} />
          <Route
            path="/groupsgroupsyoufollow"
            element={<GroupsGroupsyoufollow />}
          />
          <Route path="/groupsmygroups" element={<GroupsMyGroups />} />
          <Route path="/hometwo" element={<HomeTwo />} />
          <Route path="/jobsone" element={<JobsOne />} />
          <Route path="/jobopened" element={<JobOpened />} />
          <Route path="/postjobopening" element={<PostJobOpening />} />
          <Route path="/marketplacetwo" element={<MarketplaceTwo />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/productopened" element={<ProductOpened />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/live" element={<Live />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/addreels" element={<AddReels />} />
          <Route path="/gamestwo" element={<GamesTwo />} />
          <Route path="/gameopened" element={<GameOpened />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/advertisementtwo" element={<AdvertisementTwo />} />
          <Route path="/advertisementone" element={<AdvertisementOne />} />
          <Route path="/forun" element={<Forun />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
