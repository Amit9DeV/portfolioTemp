import { NavLink } from "react-router-dom"
import {
  Card,
  Typography,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { X, Facebook, Instagram } from "iconoir-react";
export default function Home(){
    return(<>
    
    <div class="absolute h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[100vh] w-[100%] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div>

          <div className=" bg-transparent relative  ">
        <div className="flex flex-col items-center">
          <div className=" ">
            <div className=" m-4 md:mt-32 flex items-center justify-center rounded-full px-3 py-1 text-sm  text-purple-300 ring-1 ring-pink-800 hover:text-green-700 ">
               MERN DEVELOPER
              <NavLink to="/Projects" className="font-semibold text-indigo-600 pl-3 ">
                <span aria-hidden="true" className="inset-0" />
                Projects <span aria-hidden="true">&rarr;</span>
              </NavLink>
            </div>
          </div>





          <div className="text-center flex flex-col items-center">

          <Card className="max-w-xs bg-transparent">
      <Card.Header
        as="img"
        src="/avtar.jpg"
        alt="profile-picture"
      />
      <Card.Body className="text-center bg-transparent text-white ">
        <Typography type="h5">Amit Ram</Typography>
        <Typography className="my-1 text-foreground">
          Web Developer
        </Typography>
      </Card.Body>
      <Card.Footer className="flex items-center justify-center gap-1">
        <Tooltip>
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
          >
            <X className="h-3.5 w-3.5 text-white " />
          </Tooltip.Trigger>
          <Tooltip.Content className="text-white">
            Follow
            <Tooltip.Arrow className="text-white" />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
          >
            <Facebook className="h-4 w-4 text-white" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Like
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
          >
            <Instagram className="h-4 w-4 text-white" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Follow
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Card.Footer>
    </Card>
         <div>

         </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="Projects"
                className="rounded-md bg-indigo-600 text-xl px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Projects
              </NavLink>
            </div>
          </div>
        </div>

      </div>

    </>)
}