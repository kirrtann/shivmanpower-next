"use client"
import { useParams } from "next/navigation"
import JobDetailCommon from "../../common/jobcommonpage"
import { Jobdeatil } from "../../common/jobdetail"
import { jobtype } from "../../common/type"

const JobDetailPage = () => {
    const { id } = useParams()
    const job: jobtype | undefined = Jobdeatil.find(j => j.id === Number(id))

    return <JobDetailCommon job={job} />
}

export default JobDetailPage
