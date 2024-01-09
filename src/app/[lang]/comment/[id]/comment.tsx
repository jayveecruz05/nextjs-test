'use client';

import styles from './comment.module.scss';
import { useTranslations } from 'next-intl';
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useApiContext } from '@/assets/script/api/context/global'

const Values = (langTrans: any, object: any) => {
  const list: any[] = []
  for (const property in object) {
    list.push(
      <p key={property} className={styles.property}>
        <span className={styles.name}>{langTrans(`data-name/${property}`)}:</span>
        <span className={styles.value}>{object[property]}</span>
      </p>
    );
  }
  return list;
}

const Comment = () => {
  const pathName = usePathname();
  const langTrans = useTranslations('lang');
  const params = useParams<{ id: string }>()
  const defaultPath = pathName.slice(0, 3)
  const { getComment } = useApiContext().useComments()
  // Queries
  const response: any = getComment(params.id)
  return (
    <>
      <h1 className="title">{langTrans('comment/title')} {params.id}</h1>
      <Link className={styles['back-button']} href={defaultPath}>&#8678; {langTrans('button/back')}</Link>
      {(response.isLoading) ? <p>{langTrans('loading/data')}</p> : <div className={styles['properties-holder']}>{Values(langTrans, response?.data?.data)}</div>}
    </>
  )
}

export default Comment;