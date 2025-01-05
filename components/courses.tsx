"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { title } from "@/components/primitives";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/table";
import { siteConfig } from "@/config/site";


export const Courses = () => {

  return (
    <div>
      <section className="flex w-full flex-col items-left justify-center gap-4 py-8 md:py-10">
        <span className={title({ size:"sm", color: "violet" })}>{siteConfig.courses.particulier}&nbsp;</span>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.pretitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.pre} 🌸</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.preinfo}</p>
          </CardFooter>
        </Card>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.posttitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.post} 🌿</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.postinfo}</p>
          </CardFooter>
        </Card>

        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.seniortitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.senior} 🌟</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.seniorinfo}</p>
          </CardFooter>
        </Card>

        <br/>
        <span className={title({ size:"sm", color: "violet" })}>{siteConfig.courses.formation}&nbsp;</span>

        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.yttc75title}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.yttc}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.yttc75info}</p>
          </CardFooter>
        </Card>

        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.yttc200title}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.yttc}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.yttc200info}</p>
          </CardFooter>
        </Card>

        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.medicaltitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.medical1}</p>
            <p>{siteConfig.courses.medical2}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.medicalinfo}</p>
          </CardFooter>
        </Card>


        {/*<br/>
        <span className={title({ size:"sm", color: "violet" })}>Master Class&nbsp;</span>*/}

        <br/>
        <span className={title({ size:"sm", color: "violet" })}>{siteConfig.courses.rebozotitle}&nbsp;</span>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.rebozotitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.rebozo} 🌺</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.rebozoinfo}</p>
          </CardFooter>
        </Card>

        <br/>
        <span className={title({ size:"sm", color: "violet" })}>{siteConfig.courses.retraitetitle}&nbsp;</span>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">{siteConfig.courses.retraitesubtitle}</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.retraite}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <p>{siteConfig.courses.retraiteinfo}</p>
          </CardFooter>
        </Card>

        {/*<br/>
        <span className={title({ size:"sm", color: "violet" })}>Aqua&nbsp;</span>*/}



      </section>
    </div>

  );
};
