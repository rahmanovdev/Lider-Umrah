'use client';
import { useGetBlogsQuery } from '@/redux/api/blogs';
import Image from 'next/image';
import Link from 'next/link';
import styles from './UsefulinfoContent.module.scss';

interface LayoutItem {
	fr: number;
	blog: BLOG.Blog;
}
const UsefulinfoContent = () => {
	const { data: blogs, isLoading } = useGetBlogsQuery();

	if (isLoading) {
		return <div>Жүктөлүүдө...</div>;
	}

	if (!blogs || blogs.length === 0) {
		return <div>Маалымат табылган жок</div>;
	}

	const generateRows = (blogs: BLOG.GetBlogsResponse) => {
		const rows: LayoutItem[][] = [];
		let index = 0;

		const layouts = [
			[{ fr: 1 }, { fr: 1 }, { fr: 2 }],
			[{ fr: 1 }, { fr: 2 }, { fr: 1 }],
			[{ fr: 2 }, { fr: 1 }, { fr: 1 }],
			[{ fr: 1 }, { fr: 1 }, { fr: 1 }, { fr: 1 }],
			[{ fr: 2 }, { fr: 2 }]
		];

		layouts.forEach(layout => {
			const row = layout
				.map(item => {
					const blog = blogs[index];
					index++;
					return blog ? { ...item, blog } : null;
				})
				.filter(Boolean) as LayoutItem[];
			if (row.length && row) rows.push(row);
		});

		return rows;
	};

	const rows = generateRows(blogs);
	return (
		<div className={styles.use_full_info_content}>
			{rows.map((row, rowIndex) => (
				<div className={styles.row} key={rowIndex}>
					{row.map((item, blogIndex) => (
						<Link href={`/usefulinfo/${item.blog.id}`} key={item.blog.id}>
							<div className={`${styles['fr-' + item.fr]} ${styles.item}`}>
								<Image
									src={item.blog.image || '/images/placeholder.jpg'}
									alt={item.blog.name}
									width={375}
									height={420}
									priority
								/>
								<div className={styles.content}>
									<h2>{item.blog.name}</h2>
									<div
										className={styles.description}
										dangerouslySetInnerHTML={{ __html: item.blog.rich }}
									/>
								</div>
							</div>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};

export default UsefulinfoContent;
