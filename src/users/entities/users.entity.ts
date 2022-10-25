import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USERS')
export class Users {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'UID',
  })
  uid: number;

  @Column('varchar', { name: 'USERID', length: 32 })
  userId: string;

  @Column('varchar', { name: 'USERPWD', length: 100 })
  userPwd: string;

  @Column('varchar', { name: 'USEREMAIL', length: 100 })
  userEmail: string;

  @Column('timestamp', { name: 'REGIST_DATETIME' })
  registDatetime: Date;

  @Column('timestamp', { name: 'UPDATE_DATETIME' })
  updateDatetime: Date;
}
