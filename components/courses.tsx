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
        <span className={title({ color: "violet" })}>Les Cours&nbsp;</span>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">Yoga Prénatal</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.pre} 🌸</p>
          </CardBody>
        </Card>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">Yoga Postnatal</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.post} 🌿</p>
          </CardBody>
        </Card>

        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">Yoga Rebozo malagasy</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.rebozo} 🌺</p>
          </CardBody>
        </Card>
        <Card className="max-w-[810px]">
          <CardHeader className="flex gap-3">
            <p className="text-md font-bold">Yoga Senior</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.courses.senior} 🌟</p>
          </CardBody>
        </Card>
        
      </section>
    </div>

  );
};
