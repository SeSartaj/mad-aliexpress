import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { useIntl } from 'react-intl';
import { Flex } from '@strapi/design-system/Flex';
import { Box } from '@strapi/design-system/Box';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import Pencil from '@strapi/icons/Pencil';
import Cross from '@strapi/icons/Cross';
import Drag from '@strapi/icons/Drag';
import ellipsisCardTitle from '../utils/ellipsisCardTitle';
import { getTrad, ItemTypes } from '../../../utils';

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spaces[7]};

  &:last-child {
    padding: 0 ${({ theme }) => theme.spaces[3]};
  }
`;

const DragButton = styled(ActionButton)`
  padding: 0 ${({ theme }) => theme.spaces[3]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12 / 16}rem;
    height: ${12 / 16}rem;
  }
`;

const FieldContainer = styled(Flex)`
  max-height: ${32 / 16}rem;
  cursor: pointer;
  opacity: ${({ isDragging }) => (isDragging ? 0 : 1)};

  svg {
    width: ${10 / 16}rem;
    height: ${10 / 16}rem;

    path {
      fill: ${({ theme }) => theme.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary100};
    border-color: ${({ theme }) => theme.colors.primary200};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.primary600};
      }
    }

    ${Typography} {
      color: ${({ theme }) => theme.colors.primary600};
    }

    ${DragButton} {
      border-right: 1px solid ${({ theme }) => theme.colors.primary200};
    }
  }
`;

const FieldWrapper = styled(Box)`
  &:last-child {
    padding-right: ${({ theme }) => theme.spaces[3]};
  }
`;

const DraggableCard = ({
  index,
  labelField,
  onClickEditField,
  onMoveField,
  onRemoveField,
  name,
}) => {
  const { formatMessage } = useIntl();
  const ref = useRef(null);
  const editButtonRef = useRef();
  const cardEllipsisTitle = ellipsisCardTitle(labelField);

  const handleClickEditRow = () => {
    if (editButtonRef.current) {
      editButtonRef.current.click();
    }
  };

  const [, drop] = useDrop({
    accept: ItemTypes.FIELD,
    hover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      onMoveField(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: ItemTypes.FIELD,
    item: () => {
      return { index, labelField, name };
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  drag(drop(ref));

  return (
    <FieldWrapper>
      <FieldContainer
        borderColor="neutral150"
        background="neutral100"
        hasRadius
        justifyContent="space-between"
        onClick={handleClickEditRow}
        isDragging={isDragging}
      >
        <Stack horizontal size={3}>
          <DragButton
            aria-label={formatMessage(
              {
                id: getTrad('components.DraggableCard.move.field'),
                defaultMessage: 'Move {item}',
              },
              { item: name }
            )}
            onClick={e => e.stopPropagation()}
            ref={ref}
            type="button"
          >
            <Drag />
          </DragButton>
          <Typography fontWeight="bold">{cardEllipsisTitle}</Typography>
        </Stack>
        <Flex paddingLeft={3}>
          <ActionButton
            ref={editButtonRef}
            onClick={e => {
              e.stopPropagation();
              onClickEditField(name);
            }}
            aria-label={formatMessage(
              {
                id: getTrad('components.DraggableCard.edit.field'),
                defaultMessage: 'Edit {item}',
              },
              { item: name }
            )}
            type="button"
          >
            <Pencil />
          </ActionButton>
          <ActionButton
            onClick={onRemoveField}
            data-testid={`delete-${name}`}
            aria-label={formatMessage(
              {
                id: getTrad('components.DraggableCard.delete.field'),
                defaultMessage: 'Delete {item}',
              },
              { item: name }
            )}
            type="button"
          >
            <Cross />
          </ActionButton>
        </Flex>
      </FieldContainer>
    </FieldWrapper>
  );
};

DraggableCard.propTypes = {
  index: PropTypes.number.isRequired,
  labelField: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClickEditField: PropTypes.func.isRequired,
  onMoveField: PropTypes.func.isRequired,
  onRemoveField: PropTypes.func.isRequired,
};

export default DraggableCard;
