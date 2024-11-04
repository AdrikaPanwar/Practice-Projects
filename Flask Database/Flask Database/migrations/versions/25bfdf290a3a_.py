"""empty message

Revision ID: 25bfdf290a3a
Revises: 
Create Date: 2024-11-01 01:24:02.919306

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '25bfdf290a3a'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('people',
    sa.Column('pid', sa.Integer(), nullable=False),
    sa.Column('name', sa.Text(), nullable=False),
    sa.Column('age', sa.Integer(), nullable=True),
    sa.Column('job', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('pid')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('people')
    # ### end Alembic commands ###